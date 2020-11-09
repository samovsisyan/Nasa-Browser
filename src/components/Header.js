import React, {Component} from 'react';
import {Link} from "react-router-dom";

import { withTranslation, Trans } from 'react-i18next';


class Header extends Component {


    render() {
        const { t, i18n } = this.props;
        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };
        return (
            <div>
                <h1>
                    {t('NASA BROWSER')}
                </h1>
                <nav>
                    <ul id="menu">
                        <li>
                            <Link to="/">
                                {t('HOME')}
                            </Link> <span>|</span>
                        </li>
                        <li>
                            <Link to="/asteroids">
                                {t('NEARBY ASTEROIDS')}
                            </Link> <span>|</span>
                        </li>
                        <li>
                            <Link to="/apod">
                                {t('ASTRONOMY PICTURE OF THE DAY')}
                            </Link> <span>|</span>
                        </li>
                        <li>
                            <Link to="/submit-planet">
                                {t('SUBMIT NEW PLANET')}
                            </Link>
                        </li>
                    </ul>
                    <ul className="lang-bar">
                        <li>
                            <Link onClick={() => changeLanguage('en')}>EN</Link> <span>|</span>
                        </li>
                        <li>
                            <Link onClick={() => changeLanguage('ru')}>РУ</Link> <span>|</span>
                        </li>
                        <li>
                            <Link onClick={() => changeLanguage('am')}>ՀՅ</Link>
                        </li>
                    </ul>
                </nav>


            </div>
        );
    }
}

// export default Header;
export default withTranslation('translations')(Header);
