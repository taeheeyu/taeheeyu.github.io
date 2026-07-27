/**
 * main.js - 메인 홈 화면(index.html) 동적 렌더링 스크립트
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof CLASS_DATA === 'undefined') {
    console.error('CLASS_DATA가 정의되지 않았습니다. js/data.js 파일 로딩 상태를 확인해주세요.');
    return;
  }

  renderClassHeaderInfo();
  renderEducationSection();
  renderStudentSection();
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

// 1. 교육 내용 섹션 렌더링
function renderEducationSection() {
  const container = document.getElementById('eduGridContainer');
  if (!container || !CLASS_DATA.education) return;

  const eduItems = CLASS_DATA.education;
  container.innerHTML = eduItems.map(item => `
    <div class="edu-card" id="edu-card-${item.id}">
      <div class="edu-header">
        <div class="edu-icon-title">
          <span class="edu-emoji">${item.icon || '📖'}</span>
          <h3 class="edu-title">${item.title}</h3>
        </div>
        <span class="edu-badge">${item.badge || '교육활동'}</span>
      </div>
      
      <ul class="edu-details">
        <li class="edu-detail-item">
          <span class="edu-label">📍 장소:</span>
          <span class="edu-val">${item.location}</span>
        </li>
        <li class="edu-detail-item">
          <span class="edu-label">⏰ 일정:</span>
          <span class="edu-val">${item.schedule}</span>
        </li>
        <li class="edu-detail-item">
          <span class="edu-label">💡 효과:</span>
          <span class="edu-val">${item.effect}</span>
        </li>
        <li class="edu-detail-item">
          <span class="edu-label">😊 반응:</span>
          <span class="edu-val">${item.reaction}</span>
        </li>
      </ul>

      <div class="edu-gallery-wrapper">
        <div class="edu-gallery-placeholder">
          🖼️ 추후 활동 사진 갤러리 업데이트 예정
        </div>
      </div>
    </div>
  `).join('');
}

// 2. 학생 소개 섹션 렌더링 (6명 카드)
function renderStudentSection() {
  const container = document.getElementById('studentGridContainer');
  if (!container || !CLASS_DATA.students) return;

  const students = Object.values(CLASS_DATA.students);

  container.innerHTML = students.map(student => {
    // 이름 이미지 존재 시 img 태그 사용, 실패 시 텍스트 fallback
    const nameMarkup = student.centerNameImg 
      ? `<img src="${student.centerNameImg}" alt="${student.name} 이름" class="student-name-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
         <span class="student-name-fallback" style="display:none;">${student.name}</span>`
      : `<span class="student-name-fallback">${student.name}</span>`;

    return `
      <div class="student-card" onclick="location.href='student.html?id=${student.id}'">
        <div class="student-card-top" style="background-color: ${student.bgColor || '#FFF9E6'};">
          <img src="${student.centerStudentImg}" alt="${student.name} 프로필" class="student-card-img" onerror="this.src='./images/template.png';">
        </div>
        <div class="student-card-body">
          <span class="student-number-badge">${student.number}</span>
          ${nameMarkup}
          <p class="student-keyword">${student.introKeyword || '꿈을 키우는 친구'}</p>
          <span class="student-btn">손그림 보러가기 ➔</span>
        </div>
      </div>
    `;
  }).join('');
}

// 3. 주요 이슈 섹션 렌더링
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
