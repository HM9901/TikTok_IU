import styles from './Popper.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function Wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default Wrapper;
