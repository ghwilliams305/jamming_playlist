function SongList(props) {
    return (
        <div>
            <input 
                type='text'
                name='playlistName'
                placeholder='Playlist Name' />
            <hr />
            <ul>{props.children}</ul>
        </div>
    );
}

export default SongList;