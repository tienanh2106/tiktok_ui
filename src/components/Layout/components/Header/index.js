import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdn } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faCircleXmark, faSpinner , faAlignJustify , faCircleQuestion , faKeyboard } from '@fortawesome/free-solid-svg-icons';



const cx = classNames.bind(styles);

function Header (){
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='tiktok'></img>
            </div>
            <div className={cx('search')}>
                <input 
                type='text' 
                className={cx('search-input')} 
                placeholder=' search ...'
                spellCheck={false}
                 ></input>
                <button className={cx('input-clear')}><FontAwesomeIcon className={cx('input-clear-icon')} icon={faCircleXmark} /></button>
                <button className={cx('input-loading')}><FontAwesomeIcon className={cx('input-loading-icon')} icon={faSpinner} /></button>
                <button className={cx('search-btn')}><FontAwesomeIcon className={cx('search-btn-icon')} icon={faMagnifyingGlass} /></button>                
            </div>
            <div className={cx('header-right')}>
                <div className={cx('upload')}>
                    <span className={cx('text')}>Upload</span>
                </div>
                <div className={cx('login')}>
                    <span className={cx('text')}>Login</span>
                </div>
                <div className={cx('header-see-more')}>
                    <FontAwesomeIcon className={cx('text','header-see-more-icon')} icon={faAlignJustify} ></FontAwesomeIcon>
                    <div className={cx('header-menu')}>
                        <ul>
                            <li><FontAwesomeIcon icon={faAdn} className={cx('header-menu-icon')}/> English</li>
                            <li><FontAwesomeIcon icon={faCircleQuestion} className={cx('header-menu-icon')}/> Feedback and help</li>
                            <li><FontAwesomeIcon icon={faKeyboard} className={cx('header-menu-icon')}/> Keyboard shortcuts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
}

export default Header