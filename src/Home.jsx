function Home() {
  return (
    <div
      style={{
        textAlign: 'center',
        margin: '4rem auto',
        position: 'relative',
        minHeight: '40vh',
        display: 'flex',
        flexDirection: 'column',
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
          position: 'relative', // ensures it's above the ::before overlay
        }}
      >
        Scuderia Ferrari. The Pinnacle of Racing.
      </span>
      <span
        style={{
          display: 'block',
          marginTop: '1.5rem',
          fontFamily: '"Gothic A1", "Gothic Sans", Arial, sans-serif',
          fontStyle: 'italic',
          fontWeight: 'normal',
          color: 'white',
          fontSize: '1.1em',
          maxWidth: '800px',
          zIndex: 1,
          position: 'relative',
          lineHeight: 1.6,
        }}
      >
        Since 1929, Scuderia Ferrari has embodied the relentless pursuit of speed, innovation, and glory. Born from the vision of Enzo Ferrari, our legacy is built on passion, precision, and the unwavering spirit of competition. From the roaring circuits of the early Grand Prix to the cutting-edge arenas of modern Formula 1, the Prancing Horse has become a global symbol of excellence. With every turn of the wheel and every red blur on the track, we carry the dreams of generations and the pride of Italy. This is more than a team — it is history in motion, where engineering meets emotion, and victory is written in red.
      </span>
    </div>
  )
}
export default Home
