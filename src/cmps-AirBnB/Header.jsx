import { Filter } from './Filter';
import { Popover } from 'antd';
import { MenuBar } from './MenuBar';
import { UserMenuDropDown } from './UserMenuDropDown';
import { svgIcons } from './Svgs';
import { SmallFilter } from './SmallFilter';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


export function Header({ onLittleFilterClick, stayId, hostMode, showFilter, shrinked }) {
    const [visible, setVisible] = useState(false);
    const user = useSelector(storeState => storeState.userModule.user)
    const [searchParams] = useSearchParams();
    const [menuBarUser, setMenuBarUser] = useState(user)
    const nights = searchParams.get('nights');
    const handleVisibleChange = (newVisible) => {
        setVisible(newVisible);
    };
    const confirmation = (stayId && stayId !== 1) && nights

    function shrink() {
        if (shrinked){
            if (stayId && stayId !==1 && !nights){
                return 'shrinked'
            }
        }
        return ''
        
    }
    const toShrink = shrink()
    const fixed = stayId ? '' : 'fixed';
    const confirmationPage = ((stayId && stayId !== 1)&&nights)
    const navigate = useNavigate();

    
    function onClose() {
        setVisible(false)
    }
    useEffect(() => {
        if (visible) {
            setMenuBarUser(user)
        }
    },[visible])


    return (
        <section className={`header-container ${fixed}   full main-content `}>
            <div className={`header main-content ${toShrink} `}>
                <div className='header-logo flex' onClick={() => navigate(`/stay`)}>
                    <div className='airbnb-icon'>{svgIcons.AirBnB}</div>
                    <h1 className='airbnb-header'>airbnb</h1>
                </div>
                {(!hostMode && showFilter && !confirmationPage)  &&  <div className='header-filter'>
                    <SmallFilter onLittleFilterClick={onLittleFilterClick} />
                </div>}
                {hostMode &&  <div className='header-filter'>
                    <span className='host-span first' onClick={() => navigate('/host/order')}>Orders</span>
                    <span className='host-span' onClick={() => navigate('/host/dashboard')} >Dashboard</span>
                </div>}
                {!confirmationPage && <div className='header-user flex-row-center'>
                    <h1 className='switch-to-host'>Switch to hosting</h1>
                    <div className='language-icon'>{svgIcons.languageSwitch}</div>

                    <Popover
                        placement='bottomRight'
                        className="location-filter-modal"
                        content={<MenuBar onClose={onClose} user={menuBarUser} />}
                        open={visible}
                        trigger="click"
                        arrow={false}
                        onOpenChange={handleVisibleChange}
                    >
                        <div>
                           <UserMenuDropDown />
                        </div>
                    </Popover>
                </div>}
            </div>
        </section>
    );
}
