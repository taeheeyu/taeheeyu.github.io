/**
 * gallery.html - 학급 단체 추억 갤러리 대형 원본 상세보기 스크립트
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof CLASS_DATA === 'undefined' || !CLASS_DATA.groupImages) {
    console.error('CLASS_DATA가 정의되지 않았습니다. js/data.js 파일 로딩 상태를 확인해주세요.');
    return;
  }

  const groupImages = CLASS_DATA.groupImages;
  const totalCount = groupImages.length;

  // 1. URL 파라미터에서 photo ID 가져오기
  const urlParams = new URLSearchParams(window.location.search);
  let currentId = parseInt(urlParams.get('id'), 10);

  if (isNaN(currentId) || currentId < 1 || currentId > totalCount) {
    currentId = 1;
  }

  const currentIndex = groupImages.findIndex(img => img.id === currentId);
  const currentPhoto = groupImages[currentIndex >= 0 ? currentIndex : 0];

  // 2. DOM 요소 업데이트
  const galleryBadge = document.getElementById('galleryBadge');
  const galleryTitle = document.getElementById('galleryTitle');
  const galleryFullImg = document.getElementById('galleryFullImg');
  const galleryDesc = document.getElementById('galleryDesc');
  const galleryPagination = document.getElementById('galleryPagination');
  const prevBtn = document.getElementById('prevGalleryBtn');
  const nextBtn = document.getElementById('nextGalleryBtn');

  if (galleryBadge) galleryBadge.textContent = `📸 학급 단체 추억 #${currentPhoto.id}`;
  if (galleryTitle) galleryTitle.textContent = currentPhoto.title;
  if (galleryFullImg) {
    galleryFullImg.src = currentPhoto.url;
    galleryFullImg.alt = currentPhoto.title;
  }
  if (galleryDesc) {
    galleryDesc.textContent = currentPhoto.description || `우리 반 7명 친구들의 소중한 단체 추억 사진입니다 (${currentPhoto.title}).`;
  }
  if (galleryPagination) {
    galleryPagination.textContent = `${currentIndex + 1} / ${totalCount}`;
  }

  // 3. 이전 / 다음 네비게이션 버튼 연동
  const prevId = currentPhoto.id > 1 ? currentPhoto.id - 1 : totalCount;
  const nextId = currentPhoto.id < totalCount ? currentPhoto.id + 1 : 1;

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      window.location.href = `gallery.html?id=${prevId}`;
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      window.location.href = `gallery.html?id=${nextId}`;
    });
  }

  // 4. 키보드 단축키 지원 (좌/우 화살표: 이동, ESC: 메인으로)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      window.location.href = `gallery.html?id=${prevId}`;
    } else if (e.key === 'ArrowRight') {
      window.location.href = `gallery.html?id=${nextId}`;
    } else if (e.key === 'Escape') {
      window.location.href = 'main.html#group-gallery';
    }
  });
});
