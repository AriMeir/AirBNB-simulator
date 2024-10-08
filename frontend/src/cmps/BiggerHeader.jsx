import { Filter } from './Filter';
import { MenuBar } from './MenuBar';
import { UserMenuDropDown } from './UserMenuDropDown';
import { unitTestReducer } from '../store-AirBnB/reducers/stay.reducer';
import { svgIcons } from './Svgs';
import { Popover } from 'antd';
import { BigFilter } from './BigFilter';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export function BiggerHeader({ openSmallHeader, stayId, shrinked}) {
    const [visible, setVisible] = useState(false);
    const [where, setWhere] = useState('');
    const fixed = stayId ? '' : 'fixed';
    const [searchParams] = useSearchParams();
    const nights = searchParams.get('nights');

    const handleVisibleChange = (newVisible) => {
        setVisible(newVisible);
    };

    function onWherePick(region) {
        setWhere(region);
        console.log("I'm all set in", region);
    }
    function shrink() {
        if (shrinked){
            if (stayId && stayId !==1 && !nights){
                return 'shrinked'
            }
        }
        return ''

    }
    const toShrink = shrink()
    const navigate = useNavigate();

    return (
        <>
            <div className='screen-blur' onClick={openSmallHeader}></div>
            <section className={`header-container ${fixed} full main-content`}>
                <div className={`header main-content `}>
                    <div className='header-logo flex big-header-margin-bottom' onClick={() => navigate(`/stay`)}>
                        <div className='airbnb-icon'>{svgIcons.AirBnB}</div>
                        <h1 className='airbnb-header'>arebnb</h1>
                    </div>
                    <div className='filter-nav-container flex column center align-center'>
                        <div className='nav-bar flex row space-between'>
                            <button className='nav-button bold'><span>Stays</span></button>
                            <button className='nav-button'><span>Experiences</span></button>
                            <button className='nav-button'><span>Online Experiences</span></button>
                        </div>
                        <div className='header-filter'>
                            <BigFilter onWherePick={onWherePick} openSmallHeader={openSmallHeader} />
                        </div>
                    </div>
                    <div className='header-user flex-row-center big-header-margin-bottom'>
                        <h1 className='switch-to-host' onClick={() => navigate('/host')}>Switch to hosting</h1>
                        <div className='language-icon'>{svgIcons.languageSwitch}</div>

                        <Popover
                            placement='bottomLeft'
                            className="location-filter-modal"
                            content={<MenuBar/>}
                            open={visible}
                            trigger="click"
                            arrow={false}
                            onOpenChange={handleVisibleChange}
                        >
                            <div>
                                <UserMenuDropDown />
                            </div>
                        </Popover>
                    </div>
                </div>
            </section>
        </>
    );
}
