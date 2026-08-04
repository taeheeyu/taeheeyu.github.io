/**
 * main.js - 메인 홈 화면(index.html) 동적 렌더링 스크립트
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof CLASS_DATA === 'undefined') {
    console.error('CLASS_DATA가 정의되지 않았습니다. js/data.js 파일 로딩 상태를 확인해주세요.');
    return;
  }

  renderClassHeaderInfo();
  renderGroupGallerySection();
  renderStudentSection();
  renderEducationSection();
  renderIssuesSection();
});

// 학급 헤더 기본 정보 렌더링
function renderClassHeaderInfo() {
  const info = CLASS_DATA.classInfo;
  if (!info) return;

  const schoolBadge = document.getElementById('schoolBadge');
  const heroBadge = document.getElementById('heroBadge');

  if (schoolBadge) schoolBadge.textContent = info.schoolName;
  if (heroBadge) heroBadge.textContent = `${info.heroBadge} | ${info.gradeClass}`;
}

// 1. 단체 추억 갤러리 섹션 렌더링 (group image 1~3)
function renderGroupGallerySection() {
  const container = document.getElementById('groupGridContainer');
  if (!container || !CLASS_DATA.groupImages) return;

  const images = CLASS_DATA.groupImages;
  container.innerHTML = images.map((img, idx) => `
    <div class="group-card">
      <div class="group-img-wrapper">
        <img src="${img.url}" alt="${img.title}" class="group-img" onerror="this.src='./images/template.png';">
      </div>
      <div class="group-card-caption">
        <span>🌸 ${img.title}</span>
      </div>
    </div>
  `).join('');
}

// 2. 학생 소개 섹션 렌더링 (손그림 보러가기 버튼 제거 & center name 크게 배치)
function renderStudentSection() {
  const container = document.getElementById('studentGridContainer');
  if (!container || !CLASS_DATA.students) return;

  const students = Object.values(CLASS_DATA.students);

  container.innerHTML = students.map(student => {
    const nameMarkup = student.centerNameImg 
      ? `<img src="${student.centerNameImg}" alt="${student.name} 이름" class="student-name-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
         <span class="student-name-fallback" style="display:none;">${student.name}</span>`
      : `<span class="student-name-fallback">${student.name}</span>`;

    return `
      <div class="student-card" onclick="location.href='student.html?id=${student.id}'" title="${student.name} 손그림 보러가기">
        <div class="student-card-top cute-bg">
          <img src="${student.centerStudentImg}" alt="${student.name} 프로필" class="student-card-img" onerror="this.src='./images/template.png';">
        </div>
        <div class="student-card-body">
          ${nameMarkup}
          <p class="student-keyword">${student.introKeyword || '꿈을 키우는 친구'}</p>
        </div>
      </div>
    `;
  }).join('');
}

// 3. 교육 내용 섹션 렌더링 (특수학급 지적장애 학생 접근성을 고려한 텍스트 단순화)
function renderEducationSection() {
  const container = document.getElementById('eduGridContainer');
  if (!container || !CLASS_DATA.education) return;

  const eduItems = CLASS_DATA.education;
  container.innerHTML = eduItems.map(item => `
    <div class="edu-card simple-accessible" id="edu-card-${item.id}">
      <div class="edu-header">
        <div class="edu-icon-title">
          <span class="edu-emoji">${item.icon || '📖'}</span>
          <h3 class="edu-title">${item.title}</h3>
        </div>
        <span class="edu-badge">${item.badge || '활동'}</span>
      </div>
      
      <ul class="edu-details easy-text">
        <li class="edu-detail-item">
          <span class="edu-label">📍 장소:</span>
          <span class="edu-val">${item.location}</span>
        </li>
        <li class="edu-detail-item">
          <span class="edu-label">⏰ 시간:</span>
          <span class="edu-val">${item.schedule}</span>
        </li>
        <li class="edu-detail-item highlight-act">
          <span class="edu-val">${item.activity || ''}</span>
        </li>
      </ul>
    </div>
  `).join('');
}

// 4. 주요 이슈 섹션 렌더링
function renderIssuesSection() {
  const container = document.getElementById('issuesGridContainer');
  if (!container || !CLASS_DATA.issues) return;

  const issues = CLASS_DATA.issues;
  container.innerHTML = issues.map(issue => `
    <div class="issue-card" id="${issue.id}">
      <div class="issue-meta">
        <span class="issue-tag">${issue.tag || '소식'}</span>
        <span class="issue-date">${issue.date}</span>
      </div>
      <h3 class="issue-title">${issue.title}</h3>
      <p class="issue-summary">${issue.summary}</p>
    </div>
  `).join('');
}
