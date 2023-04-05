import './DropdownMenu.scss';
import {RiArrowDropDownLine} from 'react-icons/ri'

export default function DropdownMenu() {

        const sortString = "Sort by: A-Z";

    return (
        <div className='dropdown-menu'>
            <p>{sortString}</p>
            <RiArrowDropDownLine />
        </div>
    )
}