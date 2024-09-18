import React, { useState, useEffect } from 'react';

const CustomTypewriter = ({ strings, typingSpeed = 100, erasingSpeed = 50, delay = 1500, loop = true }) => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        if (isFinished) return;

        if (subIndex === strings[index].length + 1 && !isDeleting && !isFinished) {
            setIsFinished(true);
            setTimeout(() => {
                setIsDeleting(true);
                setIsFinished(false);
            }, delay);
            return;
        }

        if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % strings.length);
        }

        const timeout = setTimeout(() => {
            setText(strings[index].substring(0, subIndex));
            setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, isDeleting ? erasingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting, isFinished, strings, delay, typingSpeed, erasingSpeed]);

    // Blinking effect
    useEffect(() => {
        const blinkTimeout = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(blinkTimeout);
    }, [blink]);

    return (
        <span className='flex'>
            {text}
            <span className="cursor" style={{ opacity: blink ? 1 : 0 , display:"inline-block"}}>
                |
            </span>
        </span>
    );
};

export default CustomTypewriter;
