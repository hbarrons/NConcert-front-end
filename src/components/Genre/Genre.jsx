

const Genre = (props) => {
  return ( 
    <div>
      <p>{props.genre.genre}</p>
      <button className="btn btn-success btn-sm" type="submit" onClick={() => props.handleDeleteGenre(props.genre._id)}>Delete Genre</button>
    </div>
   );
}
 
export default Genre;