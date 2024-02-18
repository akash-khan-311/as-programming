
import { Outlet } from 'react-router-dom';
import Course from '../components/Course/Course';

const Root = () => {
    return (
        <>
            <Outlet/>
            <Course/>
        </>
    );
};

export default Root;