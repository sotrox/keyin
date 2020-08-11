import { useState } from 'react';
import {
  tonalLemmatizationAnalyzer,
  lemmatize,
  graphAnalyzeTonal,
  inflectDesinence,
} from 'taipa';
import {
  getInflectionalSuffixes,
  getStems,
  getSoundSequences,
} from '../src/process';

function WordPage() {
  const [input, setInput] = useState('');

  const tla = tonalLemmatizationAnalyzer;

  const letters = graphAnalyzeTonal(input).map(
    x => x.letter && x.letter.literal
  );

  const soudnSeqs = getSoundSequences(
    tla.morphAnalyze(input).map(x => x.sounds)
  );
  const rootSeqs = tla
    .morphAnalyze(input)
    .map(it =>
      it
        .getForms()
        .map(it => it.literal)
        .join(', ')
    )
    .filter(it => it.length > 0);

  const lxLemma = lemmatize(input);
  const stems = getStems(lxLemma.word.literal, lxLemma.getInflectionalEnding());
  const inflectionalSuffixes = getInflectionalSuffixes(
    lxLemma.getInflectionalEnding()
  );
  const lemmas = lxLemma.getLemmas().map(x => x.literal);

  const lxInflect = inflectDesinence(input);
  const proceedingForms = lxInflect.getForms().map(x => x.literal);

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  return (
    <div>
      拍羅馬字, 輸出 lemmas, stem, inflectional suffix, proceeding forms, sound
      sequences, root sequences, 甲 letters
      <label>
        <br />
        <input type="text" value={input} onChange={handleChange} />
      </label>
      <br />
      lemmas
      {lemmas.map(x => (
        <li>{x}</li>
      ))}
      <br />
      stem
      {stems.map(x => (
        <li>{x}</li>
      ))}
      <br />
      inflectional suffix
      {inflectionalSuffixes.map(x => (
        <li>{x}</li>
      ))}
      <br />
      proceeding forms
      {proceedingForms.map(x => (
        <li>{x}</li>
      ))}
      <br />
      sound sequences
      {soudnSeqs.map(x => (
        <li>{x[0] + ' - ' + x[1]}</li>
      ))}
      <br />
      root sequences
      {rootSeqs.map(x => (
        <li>{x}</li>
      ))}
      <br />
      letters: {letters.join(', ')}
    </div>
  );
}

export default WordPage;
