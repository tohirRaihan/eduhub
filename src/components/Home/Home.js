import Blogs from '../Blogs/Blogs';
import Courses from '../Courses/Courses';
import Hero from '../Hero/Hero';
import './Home.css';

const Home = () => {
    return (
        <main>
            <Hero></Hero>
            <Courses latest={true}></Courses>
            <Blogs latest={true}></Blogs>
        </main>
    );
}

export default Home;
