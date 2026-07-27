/**
 * student.js - 학생 상세 페이지(student.html) 동적 렌더링 및 모달 스크립트
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof CLASS_DATA === 'undefined') {
    console.error('CLASS_DATA가 로딩되지 않았습니다.');
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const studentKeys = Object.keys(CLASS_DATA.students);
  let studentId = urlParams.get('id');

  if (!studentId || !CLASS_DATA.students[studentId]) {
    studentId = studentKeys[0];
  }

  const currentStudent = CLASS_DATA.students[studentId];

  renderStudentProfile(currentStudent);
  renderDrawings(currentStudent);
  setupNavigationButtons(studentId, studentKeys);
  setupModalEvents();
});

// 프로필 및 중앙 영역 렌더링 (이름이 이미지 머리 위에 위치)
function renderStudentProfile(student) {
  document.title = `${student.name} (${student.number}) | 손그림 소개`;

  const centerStudentImg = document.getElementById('centerStudentImg');
  const centerNameImg = document.getElementById('centerNameImg');
  const centerNameFallback = document.getElementById('centerNameFallback');

  centerStudentImg.src = student.centerStudentImg;
  centerStudentImg.alt = `${student.name} 프로필`;
  centerStudentImg.onerror = () => {
    centerStudentImg.src = student.centerStudentImg.replace('_nobg.png', '.png');
  };

  if (student.centerNameImg) {
    centerNameImg.src = student.centerNameImg;
    centerNameImg.alt = `${student.name} 이름`;
    centerNameImg.onerror = () => {
      centerNameImg.style.display = 'none';
      centerNameFallback.style.display = 'inline-block';
      centerNameFallback.textContent = student.name;
    };
  } else {
    centerNameImg.style.display = 'none';
    centerNameFallback.style.display = 'inline-block';
    centerNameFallback.textContent = student.name;
  }
}

// 좌우 손그림 카드 렌더링 (텍스트 라벨 전면 제거, 오로지 흰색 배경에 순수 그림만 표시)
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

    // 사용자 요청: '첫 번째 그림' 등 텍스트 모두 제거하고 그림만 표시!
    card.innerHTML = `
      <div class="postit-img-wrapper">
        <img src="${drawing.imgUrl}" alt="${student.name} 손그림 ${index + 1}" class="postit-drawing-img" onerror="this.src='./images/template.png';">
      </div>
    `;

    card.addEventListener('click', () => {
      openDrawingModal(student.name, drawing, `${index + 1}번째 작품`);
    });

    targetCol.appendChild(card);
  });
}

function openDrawingModal(studentName, drawing, labelText) {
  const modal = document.getElementById('drawingModal');
  const modalStudentName = document.getElementById('modalStudentName');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalMotivation = document.getElementById('modalMotivation');
  const modalStory = document.getElementById('modalStory');

  modalStudentName.textContent = `${studentName} 친구의 작품`;
  modalTitle.textContent = labelText || "작품 상세 소개";
  modalImage.src = drawing.imgUrl;
  modalImage.alt = `${studentName} 손그림 상세`;
  modalMotivation.textContent = drawing.motivation || "그림을 그리며 느낀 소중한 동기가 담겨있습니다.";
  modalStory.textContent = drawing.story || "이 그림에 담긴 다정한 이야기입니다.";

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
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
