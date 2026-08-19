/**
 * landing.js - 랜딩 페이지의 학생 영역과 툴팁 렌더링
 */

document.addEventListener('DOMContentLoaded', () => {
  const landingPage = typeof CLASS_DATA !== 'undefined' ? CLASS_DATA.landingPage : null;
  const image = document.getElementById('landingImage');
  const hotspotContainer = document.getElementById('landingHotspots');

  if (!landingPage || !image || !hotspotContainer) return;

  image.src = landingPage.imageUrl;
  image.alt = landingPage.imageAlt;

  const isMobileLayout = () => window.matchMedia(
    '(max-width: 767px), (hover: none) and (pointer: coarse)'
  ).matches;

  const closeTooltips = () => {
    hotspotContainer.querySelectorAll('.is-tooltip-open').forEach((area) => {
      area.classList.remove('is-tooltip-open');
      area.setAttribute('aria-expanded', 'false');
    });
  };

  landingPage.hotspots.forEach((hotspot) => {
    const area = document.createElement('a');
    const tooltip = document.createElement('span');

    area.href = 'main.html';
    area.className = 'landing-hotspot';
    area.setAttribute('aria-label', `${hotspot.tooltip} 영역: 학급 소개 메인 페이지로 이동`);
    area.setAttribute('aria-expanded', 'false');
    area.style.setProperty('--x', `${hotspot.x}%`);
    area.style.setProperty('--y', `${hotspot.y}%`);
    area.style.setProperty('--width', `${hotspot.width}%`);
    area.style.setProperty('--height', `${hotspot.height}%`);

    tooltip.className = 'hotspot-tooltip';
    tooltip.textContent = hotspot.tooltip;

    area.appendChild(tooltip);
    hotspotContainer.appendChild(area);

    let touchedArea = false;

    area.addEventListener('pointerdown', (event) => {
      touchedArea = event.pointerType === 'touch';
    });

    area.addEventListener('click', (event) => {
      const shouldOpenTooltip = isMobileLayout() || touchedArea;
      touchedArea = false;

      if (!shouldOpenTooltip || area.classList.contains('is-tooltip-open')) return;

      event.preventDefault();
      closeTooltips();
      area.classList.add('is-tooltip-open');
      area.setAttribute('aria-expanded', 'true');
    });
  });
});
