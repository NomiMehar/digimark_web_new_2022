import React, { useState } from 'react';

const withCursorPoint = (WrappedComponent) => {
    return function WithCursorPoint(props) {
        const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        return (
            <div className="cursor-container" onMouseMove={handleMouseMove}>
                <div
                    className="highlight-on-hover"
                    style={{ left: cursorPosition.x, top: cursorPosition.y }}
                ><span></span></div>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default withCursorPoint;