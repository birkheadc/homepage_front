import * as React from 'react';
import './Dropdown.css';

interface DropdownProps {
    content: React.ReactElement | null,
    handleMouseLeave(e: React.MouseEvent<HTMLElement>): void
}

function Dropdown(props: DropdownProps) {
    return (
        <div className='nav-dropdown' onMouseLeave={props.handleMouseLeave}>
            {props.content}
        </div>
    );
}

export default Dropdown;