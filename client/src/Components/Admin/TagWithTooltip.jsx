import React, { useRef, useState } from 'react';

function TagWithTooltip({ tag, color, fontSize }) {
    const [isHovered, setIsHovered] = useState(false);
    const [tooltipStyle, setTooltipStyle] = useState({});
    const tagRef = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (tagRef.current) {
            const tagRect = tagRef.current.getBoundingClientRect();
            setTooltipStyle({
                left: tagRect.left + (tagRect.width / 2) + window.scrollX,
                top: tagRect.top + window.scrollY - 16,
            });
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <span
                ref={tagRef}
                key={tag.value}
                style={{
                    margin: "0 0.5rem",
                    color,
                    fontSize,
                    display: 'inline-block',
                    width: 'auto',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    userSelect: "none",
                    WebkitUserSelect: "none",
                }}
                className={`tag`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {tag.value}
            </span>
            <span
                style={{
                    ...tooltipStyle,
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                    fontSize: "0.8rem",
                    backgroundColor: "#666668",
                    padding: "0.5rem",
                    borderRadius: "0.5rem",
                    visibility: isHovered ? 'visible' : 'hidden',
                    zIndex: 1,
                    color: "white",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                }}
            >
                Mentioned {tag.count} times
            </span>
        </>
    );
}

export default TagWithTooltip;