/**
 * student.js - 학생 상세 페이지(student.html) 동적 렌더링, 모달 및 제목/이야기/선생님 설명 작성 기능
 */

let activeStudentId = null;
let activeDrawingId = null;

document.addEventListener('DOMContentLoaded', () => {
  if (typeof CLASS_DATA === 'undefined') {
    console.error('CLASS_DATA가 로딩되지 않았습니다.');
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const studentKeys = Object.keys(CLASS_DATA.students);
  let studentId = urlParams.get('id');

  if (!studentId || !CLASS_DATA.students[studentId]) {
    if (studentId === '201419' && CLASS_DATA.students['20419']) {
      studentId = '20419';
    } else {
      studentId = studentKeys[0];
    }
  }

  activeStudentId = studentId;
  const currentStudent = CLASS_DATA.students[studentId];

  renderStudentProfile(currentStudent);
  renderDrawings(currentStudent);
  setupNavigationButtons(studentId, studentKeys);
  setupModalEvents();
  setupStoryInputEvents();
});

// 프로필 및 중앙 영역 렌더링
function renderStudentProfile(student) {
  document.title = `${student.name} (${student.number}) | 손그림 소개`;

  const centerStudentImg = document.getElementById('centerStudentImg');
  const centerNameImg = document.getElementById('centerNameImg');
  const centerNameFallback = document.getElementById('centerNameFallback');

  centerStudentImg.src = student.centerStudentImg || './images/template.png';
  centerStudentImg.alt = `${student.name} 프로필`;
  centerStudentImg.onerror = () => {
    if (centerStudentImg.src.includes('_nobg.png')) {
      centerStudentImg.src = student.centerStudentImg.replace('_nobg.png', '.png');
    } else if (!centerStudentImg.src.includes('template.png')) {
      centerStudentImg.src = './images/template.png';
    }
  };

  if (student.centerNameImg) {
    centerNameImg.style.display = 'block';
    centerNameFallback.style.display = 'none';
    centerNameImg.src = student.centerNameImg;
    centerNameImg.alt = `${student.name} 이름`;
    centerNameImg.onerror = () => {
      if (centerNameImg.src.includes('center%20name.png') || centerNameImg.src.includes('center name.png')) {
        centerNameImg.src = student.centerNameImg.replace('center name.png', 'center name 2.png');
      } else {
        centerNameImg.style.display = 'none';
        centerNameFallback.style.display = 'inline-block';
        centerNameFallback.textContent = student.name;
      }
    };
  } else {
    centerNameImg.style.display = 'none';
    centerNameFallback.style.display = 'inline-block';
    centerNameFallback.textContent = student.name;
  }
}

// 좌우 손그림 카드 렌더링
function renderDrawings(student) {
  const leftCol = document.getElementById('leftDrawingsCol');
  const rightCol = document.getElementById('rightDrawingsCol');

  if (!leftCol || !rightCol) return;

  leftCol.innerHTML = '';
  rightCol.innerHTML = '';

  const drawings = student.drawings || [];
  if (drawings.length === 0) return;

  const rotateClasses = [
    'rotate-neg-4',
    'rotate-pos-3',
    'rotate-neg-2',
    'rotate-pos-5',
    'rotate-pos-2',
    'rotate-neg-5'
  ];

  drawings.forEach((drawing, index) => {
    const isLeft = (index % 2 === 0);
    const targetCol = isLeft ? leftCol : rightCol;
    const rotateClass = rotateClasses[index % rotateClasses.length];

    const card = document.createElement('div');
    card.className = `postit-card pure-white ${rotateClass}`;

    card.innerHTML = `
      <div class="postit-img-wrapper">
        <img src="${drawing.imgUrl}" alt="${student.name} 손그림 ${index + 1}" class="postit-drawing-img" onerror="this.src='./images/template.png';">
      </div>
    `;

    card.addEventListener('click', () => {
      openDrawingModal(student.id, student.name, drawing, `${index + 1}번째 작품`);
    });

    targetCol.appendChild(card);
  });
}

// 모달 팝업 열기 (story -> 그림 관련 이야기 / teacherNote -> 선생님 추가 설명)
function openDrawingModal(studentId, studentName, drawing, fallbackTitle) {
  activeStudentId = studentId;
  activeDrawingId = drawing.id;

  const modal = document.getElementById('drawingModal');
  const modalStudentName = document.getElementById('modalStudentName');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  
  const modalStory = document.getElementById('modalStory');
  const modalTeacherNote = document.getElementById('modalTeacherNote');

  const storyBlock = document.getElementById('storyBlock');
  const teacherBlock = document.getElementById('teacherBlock');
  
  const storyEditBox = document.getElementById('storyEditBox');

  modalStudentName.textContent = `${studentName} 친구의 작품`;
  modalImage.src = drawing.imgUrl;
  modalImage.alt = `${studentName} 손그림 상세`;

  // 1. 그림 제목 (data.js title -> localStorage -> fallback)
  const savedTitleKey = `custom_title_${studentId}_${drawing.id}`;
  const customTitle = localStorage.getItem(savedTitleKey);
  const finalTitle = drawing.title || customTitle || fallbackTitle || "작품 상세 소개";
  modalTitle.textContent = finalTitle;

  // 2. 그림 관련 이야기 (data.js의 motivation 또는 story 최우선 표출)
  const savedStoryKey = `custom_story_${studentId}_${drawing.id}`;
  const customStory = localStorage.getItem(savedStoryKey);
  const dataStory = drawing.motivation || drawing.story || "";
  const finalStory = dataStory || customStory || "";
  if (modalStory && storyBlock) {
    if (finalStory) {
      modalStory.textContent = finalStory;
      storyBlock.style.display = 'block';
    } else {
      storyBlock.style.display = 'none';
    }
  }

  // 3. 선생님 추가 설명 (data.js의 story 또는 teacherNote 최우선 표출)
  const savedTeacherKey = `custom_teacher_${studentId}_${drawing.id}`;
  const customTeacher = localStorage.getItem(savedTeacherKey);
  const dataTeacher = (drawing.motivation && drawing.story) ? drawing.story : (drawing.teacherNote || "");
  const finalTeacher = dataTeacher || customTeacher || "";
  if (modalTeacherNote && teacherBlock) {
    if (finalTeacher) {
      modalTeacherNote.textContent = finalTeacher;
      teacherBlock.style.display = 'block';
    } else {
      teacherBlock.style.display = 'none';
    }
  }

  // 수정 박스 초기화 및 숨기기
  if (storyEditBox) storyEditBox.style.display = 'none';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 제목, 이야기, 선생님 설명 통합 작성/수정 인터랙션
function setupStoryInputEvents() {
  const modalEditBtn = document.getElementById('modalEditBtn');
  const storyEditBox = document.getElementById('storyEditBox');
  const titleInput = document.getElementById('titleInput');
  const storyInput = document.getElementById('storyInput');
  const teacherInput = document.getElementById('teacherInput');
  const storySaveBtn = document.getElementById('storySaveBtn');
  const storyCancelBtn = document.getElementById('storyCancelBtn');

  const modalTitle = document.getElementById('modalTitle');
  const modalStory = document.getElementById('modalStory');
  const modalTeacherNote = document.getElementById('modalTeacherNote');

  if (!modalEditBtn || !storyEditBox || !titleInput || !storySaveBtn || !storyCancelBtn) return;

  // 작성/수정 버튼 클릭
  modalEditBtn.addEventListener('click', () => {
    titleInput.value = (modalTitle && modalTitle.textContent !== "작품 상세 소개") ? modalTitle.textContent : "";
    if (storyInput) storyInput.value = modalStory ? modalStory.textContent : "";
    if (teacherInput) teacherInput.value = modalTeacherNote ? modalTeacherNote.textContent : "";

    storyEditBox.style.display = 'flex';
    titleInput.focus();
  });

  // 저장하기 버튼 클릭
  storySaveBtn.addEventListener('click', () => {
    const newTitle = titleInput.value.trim();
    const newStory = storyInput ? storyInput.value.trim() : "";
    const newTeacher = teacherInput ? teacherInput.value.trim() : "";

    if (!newTitle && !newStory && !newTeacher) {
      alert("제목이나 내용을 입력해주세요!");
      return;
    }

    if (activeStudentId && activeDrawingId) {
      if (newTitle) {
        localStorage.setItem(`custom_title_${activeStudentId}_${activeDrawingId}`, newTitle);
        if (modalTitle) modalTitle.textContent = newTitle;
      }
      if (newStory) {
        localStorage.setItem(`custom_story_${activeStudentId}_${activeDrawingId}`, newStory);
        if (modalStory) modalStory.textContent = newStory;
        const storyBlock = document.getElementById('storyBlock');
        if (storyBlock) storyBlock.style.display = 'block';
      }
      if (newTeacher) {
        localStorage.setItem(`custom_teacher_${activeStudentId}_${activeDrawingId}`, newTeacher);
        if (modalTeacherNote) modalTeacherNote.textContent = newTeacher;
        const teacherBlock = document.getElementById('teacherBlock');
        if (teacherBlock) teacherBlock.style.display = 'block';
      }

      storyEditBox.style.display = 'none';

      const btnOrigText = storySaveBtn.textContent;
      storySaveBtn.textContent = "✅ 저장 완료!";
      setTimeout(() => {
        storySaveBtn.textContent = btnOrigText;
      }, 1500);
    }
  });

  // 취소 버튼 클릭
  storyCancelBtn.addEventListener('click', () => {
    storyEditBox.style.display = 'none';
  });
}

function setupModalEvents() {
  const modal = document.getElementById('drawingModal');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (!modal || !closeBtn) return;

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}

function setupNavigationButtons(currentId, studentKeys) {
  const prevBtn = document.getElementById('prevStudentBtn');
  const nextBtn = document.getElementById('nextStudentBtn');

  const currentIndex = studentKeys.indexOf(currentId);
  const prevIndex = (currentIndex - 1 + studentKeys.length) % studentKeys.length;
  const nextIndex = (currentIndex + 1) % studentKeys.length;

  const prevStudent = CLASS_DATA.students[studentKeys[prevIndex]];
  const nextStudent = CLASS_DATA.students[studentKeys[nextIndex]];

  if (prevBtn) {
    prevBtn.textContent = `◀ ${prevStudent.name}`;
    prevBtn.onclick = () => window.location.href = `student.html?id=${prevStudent.id}`;
  }

  if (nextBtn) {
    nextBtn.textContent = `${nextStudent.name} ▶`;
    nextBtn.onclick = () => window.location.href = `student.html?id=${nextStudent.id}`;
  }
}
