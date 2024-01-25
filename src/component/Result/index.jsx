import useFetchQuery from "../../utils/useFetch";

export default function Result({ search }) {
  const { result, isLoading } = useFetchQuery(search);

  if (search === "") {
    return <p id="result">Type a word</p>;
  }

  if (isLoading) {
    return <p id="result">Loading...</p>;
  }

  if (result.status === 404) {
    return (
      <>
        <p>{result.title}</p>
        <p>{result.message}</p>
        <p>{result.resolution}</p>
      </>
    );
  }

  return (
    <div id="result">
      <h2>{result?.word}</h2>
      {result?.phonetics?.map((phonetic, idx) => {
        if (phonetic.text) {
          return (
            <div key={idx}>
              <p>{phonetic.text}</p>
              {phonetic.audio !== "" && (
                <button
                  onClick={() => {
                    const audio = new Audio(phonetic.audio);
                    audio.play();
                  }}
                >
                  play
                </button>
              )}
            </div>
          );
        }
      })}
      {result?.meanings?.map((meaning, index) => (
        <div key={index}>
          <p>{meaning?.partOfSpeech}</p>
          <ul>
            {meaning?.definitions?.map((def, idx) => (
              <li key={idx}>{def.definition}</li>
            ))}
          </ul>
          {meaning.antonyms.length > 0 && (
            <>
              <p>Antonyms</p>
              <ul>
                {meaning?.antonyms?.map((antonym, idx) => (
                  <li key={idx}>{antonym}</li>
                ))}
              </ul>
            </>
          )}
          {meaning.synonyms.length > 0 && (
            <>
              <p>Synonynms</p>
              <ul>
                {meaning?.synonyms?.map((synonym, idx) => (
                  <li key={idx}>{synonym}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
