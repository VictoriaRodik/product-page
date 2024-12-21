function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    // SVG for Minus icon
    const minusSVG = `
    <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.272656 2.392H14.7487V0.5H0.272656V2.392Z" fill="#01005B"/>
    </svg>
    `;

    // SVG for Plus icon
    const plusSVG = `
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.731797 8.548V10.484H8.5198V18.316H10.4558V10.484H18.2878V8.548H10.4558V0.803999H8.5198V8.548H0.731797Z" fill="#01005B"/>
    </svg>
    `;

    // Toggle the content's max-height for smooth opening and closing
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
        icon.innerHTML = plusSVG;
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.innerHTML = minusSVG;
    }
}