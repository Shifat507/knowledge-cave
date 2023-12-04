import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog, handleBookmark }) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='my-10 p-6'>
            <img src={cover} alt={`cover picture of title ${title}`} />
            <div className='flex justify-between items-center px-2'>
                <div className='flex gap-4 items-center py-4'>
                    <div>
                        <img className='rounded-full' src={author_img} alt="" width={80} />
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <div>
                    <p>{reading_time} min read</p>
                    </div>
                    <button onClick={()=>handleBookmark(blog)}><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className='text-6xl font-semibold pb-4'>{title}</h2>
            <p>
                {
                    hashtags.map( (hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func
}

export default Blog;