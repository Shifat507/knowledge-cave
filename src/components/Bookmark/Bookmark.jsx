import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h2 className='text-2xl font-semibold bg-slate-600 p-4 m-4 rounded-xl text-white'>{title}</h2>
        </div>
    );
};
Bookmark.propType = {
    bookmark: PropTypes.object
}
export default Bookmark;