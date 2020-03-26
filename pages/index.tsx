import React from 'react'

export default function Index () {
  return (
    <section className="hello">
      <p>
        Hello World! Here's a secret shared with the client using Next env:{' '}
        <strong>{process.env.SERVER_SECRET}</strong>, the secret is shared at build time,
        which means every reference to the secret is replaced with its value.
        
      </p>
      <p>
        Also the server, which is not a secret but still defined at build time, is:{' '}
        <strong>{process.env.SERVER}</strong>
      </p>
      <style>{`
        .hello {
          font: 15px Helvetica, Arial, sans-serif;
          background: #eee;
          padding: 100px;
          text-align: center;
          transition: 100ms ease-in background;
        }
        .hello:hover {
          background: #ccc;
        }
      `}</style>
    </section>
  )
}
