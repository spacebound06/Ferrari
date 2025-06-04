function News() {
  return (
    <div
      style={{
        textAlign: 'center',
        margin: '4rem auto',
        position: 'relative',
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          fontFamily: '"Gothic A1", "Gothic Sans", Arial, sans-serif',
          fontStyle: 'italic',
          fontWeight: 'bold',
          color: 'white',
          fontSize: '1.7em',
          zIndex: 1,
          position: 'relative'
        }}
      >
        Latest News
      </span>
    </div>
  )
}
export default News
