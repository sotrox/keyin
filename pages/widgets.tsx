import { Client } from 'taipa';
import { useReducer, useState } from 'react';
import { Highlighter, Entry, Highlight } from '../src/highlight';
import { FixedSizeGrid, GridChildComponentProps } from 'react-window';

const wordsChang: Entry[] = [
  { index: 0, hanyjiz: '棕', lurzmafjiz: 'chang' },
  { index: 1, hanyjiz: '粽ハァ⤇', lurzmafjiz: 'changy' },
  { index: 2, hanyjiz: '粽', lurzmafjiz: 'changw' },
  { index: 3, hanyjiz: 'サ̅ㇰ', lurzmafjiz: 'chak' },
  { index: 4, hanyjiz: '欉', lurzmafjiz: 'changx' },
  { index: 5, hanyjiz: '棕簑', lurzmafjiz: 'changz' },
  { index: 6, hanyjiz: 'サ̅ㇰ⤇', lurzmafjiz: 'chakk' },
  { index: 7, hanyjiz: '昨昏', lurzmafjiz: 'changxx' },
];

const wordsItfditt = [
  {
    index: 0,
    hanyjiz: '一直',
    lurzmafjiz: 'itfditt',
  },
  { index: 1, hanyjiz: '', lurzmafjiz: 'itfditw' },
  { index: 2, hanyjiz: '', lurzmafjiz: 'itfditf' },
];

const wordsMizmix = [
  { index: 0, hanyjiz: '綿綿', lurzmafjiz: 'mizmix' },
  { index: 1, hanyjiz: '', lurzmafjiz: 'mixxmix' },
];

const sentence = ['hitf', 'chanz', 'daiwchiw', 'chinz', 'doaw', 'diaux'];
let currWord: number = 0;

function WidgetsPage() {
  const [input, setInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      inputZero: '',
      inputOne: '',
      inputTwo: '',
      inputThree: '',
      inputFour: '',
      inputFive: '',
      inputSix: '',
      inputSeven: '',

      inputTen: '',
      inputEleven: '',
      inputTwelve: '',

      inputTwenty: '',
      inputTwentyOne: '',
    }
  );
  const [inputThirty, setInputThirty] = useState('');

  const handleChangeChang = function (e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ [name]: value });
    // e.target.focus();
  };

  const handleChangeItfditt = function (
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ [name]: value });
  };

  const handleChangeMizmix = function (e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ [name]: value });
  };

  const handleChangeSentence = function (
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setInputThirty(e.target.value);
  };

  const cli = new Client();

  const hltChang = new Highlighter(wordsChang);
  const hltChangZero: Highlight = hltChang.getTarget(
    input.inputZero,
    wordsChang[0].index
  );
  const hltChangOne: Highlight = hltChang.getTarget(
    input.inputOne,
    wordsChang[1].index
  );
  const hltChangTwo: Highlight = hltChang.getTarget(
    input.inputTwo,
    wordsChang[2].index
  );
  const hltChangThree: Highlight = hltChang.getTarget(
    input.inputThree,
    wordsChang[3].index
  );
  const hltChangFour: Highlight = hltChang.getTarget(
    input.inputFour,
    wordsChang[4].index
  );
  const hltChangFive: Highlight = hltChang.getTarget(
    input.inputFive,
    wordsChang[5].index
  );
  const hltChangSix: Highlight = hltChang.getTarget(
    input.inputSix,
    wordsChang[6].index
  );
  const hltChangSeven: Highlight = hltChang.getTarget(
    input.inputSeven,
    wordsChang[7].index
  );

  const hltItfditt = new Highlighter(wordsItfditt);
  const hltItfdittTen: Highlight = hltItfditt.getTarget(
    input.inputTen,
    wordsItfditt[0].index
  );
  const hltItfdittEleven: Highlight = hltItfditt.getTarget(
    input.inputEleven,
    wordsItfditt[1].index
  );
  const hltItfdittTwelve: Highlight = hltItfditt.getTarget(
    input.inputTwelve,
    wordsItfditt[2].index
  );

  const hltMizmix = new Highlighter(wordsMizmix);
  const hltMizmixTwenty: Highlight = hltMizmix.getTarget(
    input.inputTwenty,
    wordsMizmix[0].index
  );
  const hltMizmixTwentyOne: Highlight = hltMizmix.getTarget(
    input.inputTwentyOne,
    wordsMizmix[1].index
  );

  const entries: Entry[] = [];
  for (let i = 0; i < sentence.length; i++) {
    entries.push({ index: i, hanyjiz: '', lurzmafjiz: sentence[i] });
  }

  const hltSentence = new Highlighter(entries);

  let hltSentenceThirty: Highlight = new Highlight();
  hltSentenceThirty = hltSentence.getTarget(
    inputThirty ? inputThirty : '',
    currWord
  );

  if (
    hltSentenceThirty.tail.length == 0 &&
    inputThirty &&
    inputThirty === sentence[currWord]
  ) {
    currWord + 1 < sentence.length ? currWord++ : (currWord = 0);
    setInputThirty('');
  }

  const CellChang = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div
      className={
        columnIndex % 2
          ? rowIndex % 2 === 0
            ? 'GridItemOdd'
            : 'GridItemEven'
          : rowIndex % 2
          ? 'GridItemOdd'
          : 'GridItemEven'
      }
      style={style}
    >
      {rowIndex == 0 ? (
        wordsChang[columnIndex].hanyjiz
      ) : rowIndex == 1 ? (
        wordsChang[columnIndex].lurzmafjiz
      ) : rowIndex == 2 ? (
        cli
          .processTonal(wordsChang[columnIndex].lurzmafjiz)
          .blockSequences.filter(it => it.length > 0)
      ) : rowIndex == 3 ? (
        columnIndex == 0 ? (
          <div>
            <text style={{ color: 'red' }}>{hltChangZero.target}</text>
            {hltChangZero.tail}
            <br />
            {hltChangZero.hint.hint}
            <br />
            {/* <input
              type="text"
              value={input.inputZero}
              name="inputZero"
              onChange={handleChangeChang}
            /> */}
          </div>
        ) : columnIndex == 1 ? (
          <div>
            <text style={{ color: 'red' }}>{hltChangOne.target}</text>
            {hltChangOne.tail}
            <br />
            {hltChangOne.hint.hint}
            <br />
            {/* <input
              type="text"
              value={input.inputOne}
              name="inputOne"
              onChange={handleChangeChang}
            /> */}
          </div>
        ) : columnIndex == 2 ? (
          <div>
            <text style={{ color: 'red' }}>{hltChangTwo.target}</text>
            {hltChangTwo.tail}
            <br />
            {hltChangTwo.hint.hint}
            <br />
            {/* <input
              type="text"
              value={input.inputTwo}
              name="inputTwo"
              onChange={handleChangeChang}
            /> */}
          </div>
        ) : columnIndex == 3 ? (
          <div>
            <text style={{ color: 'red' }}>{hltChangThree.target}</text>
            {hltChangThree.tail}
            <br />
            {hltChangThree.hint.hint}
            <br />
            {/* <input
              type="text"
              value={input.inputThree}
              name="inputThree"
              onChange={handleChangeChang}
            /> */}
          </div>
        ) : columnIndex == 4 ? (
          <div>
            <text style={{ color: 'red' }}>{hltChangFour.target}</text>
            {hltChangFour.tail}
            <br />
            {hltChangFour.hint.hint}
            <br />
            {/* <input
              type="text"
              value={input.inputFour}
              name="inputFour"
              onChange={handleChangeChang}
            /> */}
          </div>
        ) : columnIndex == 5 ? (
          <div>
            <text style={{ color: 'red' }}>{hltChangFive.target}</text>
            {hltChangFive.tail}
            <br />
            {hltChangFive.hint.hint}
            <br />
            {/* <input
              type="text"
              value={input.inputFive}
              name="inputFive"
              onChange={handleChangeChang}
            /> */}
          </div>
        ) : columnIndex == 6 ? (
          <div>
            <text style={{ color: 'red' }}>{hltChangSix.target}</text>
            {hltChangSix.tail}
            <br />
            {hltChangSix.hint.hint}
            <br />
            {/* <input
              type="text"
              value={input.inputSix}
              name="inputSix"
              onChange={handleChangeChang}
            /> */}
          </div>
        ) : columnIndex == 7 ? (
          <div>
            <text style={{ color: 'red' }}>{hltChangSeven.target}</text>
            {hltChangSeven.tail}
            <br />
            {hltChangSeven.hint.hint}
            <br />
            {/* <input
              type="text"
              value={input.inputSeven}
              name="inputSeven"
              onChange={handleChangeChang}
            /> */}
          </div>
        ) : (
          <div />
        )
      ) : (
        <div />
      )}
    </div>
  );

  const TableChang = () => (
    <FixedSizeGrid
      className="GridChang"
      columnCount={8}
      columnWidth={160}
      rowCount={4}
      rowHeight={35}
      height={190}
      width={1300}
    >
      {CellChang}
    </FixedSizeGrid>
  );

  const CellItfdittEighth = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div
      style={style}
    >
      {rowIndex == 0 ? (
        <div>
          <text style={{ color: 'red' }}>{hltItfdittTen.target}</text>
          {hltItfdittTen.tail}
        </div>
      ) : rowIndex == 1 ? (
        <div>
          {hltItfdittTen.hint.hint}
        </div>
      ) : (
        <div />
      )}
      </div>
      );
    
  const TableItfdittEighth = () => (
    <FixedSizeGrid
      className="GridItfdittEighth"
      columnCount={1}
      columnWidth={160}
      rowCount={2}
      rowHeight={35}
      height={70}
      width={160}
    >
      {CellItfdittEighth}
    </FixedSizeGrid>
  );

  const CellItfdittThird = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div
      style={style}
    >
      {rowIndex == 0 ? (
        <div>
          <text style={{ color: 'red' }}>{hltItfdittEleven.target}</text>
          {hltItfdittEleven.tail}
        </div>        
      ) : rowIndex == 1 ? (
        <div>
          {hltItfdittEleven.hint.hint}          
        </div>
      ) : (
        <div />
      )}
      </div>
      );
    
  const TableItfdittThird = () => (
    <FixedSizeGrid
      className="GridItfdittThird"
      columnCount={1}
      columnWidth={160}
      rowCount={2}
      rowHeight={35}
      height={70}
      width={160}
    >
      {CellItfdittThird}
    </FixedSizeGrid>
  );

  const CellItfdittFirst = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div
      style={style}
    >
      {rowIndex == 0 ? (
        <div>
        <text style={{ color: 'red' }}>{hltItfdittTwelve.target}</text>
        {hltItfdittTwelve.tail}
        </div>
      ) : rowIndex == 1 ? (
        <div>
          {hltItfdittTwelve.hint.hint}
        </div>
      ) : (
        <div />
      )}
      </div>
      );
    
  const TableItfdittFirst = () => (
    <FixedSizeGrid
      className="GridItfdittFirst"
      columnCount={1}
      columnWidth={160}
      rowCount={2}
      rowHeight={35}
      height={70}
      width={160}
    >
      {CellItfdittFirst}
    </FixedSizeGrid>
  );

  const CellMizmix = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div
      style={style}
    >
      {rowIndex == 0 && columnIndex == 0 ? (
        <div>
          <text style={{ color: 'red' }}>{hltMizmixTwenty.target}</text>
          {hltMizmixTwenty.tail}
          <br />
          {hltMizmixTwenty.hint.hint}
          <br />
        </div>
      ) : rowIndex == 0 && columnIndex == 1 ? (
        <div>
          <text style={{ color: 'red' }}>{hltMizmixTwentyOne.target}</text>
          {hltMizmixTwentyOne.tail}
          <br />
          {hltMizmixTwentyOne.hint.hint}
          <br />
        </div>
      ) : (
        <div />
      )}
    </div>
  );

  const TableMizmix = () => (
    <FixedSizeGrid
      className="GridMizmix"
      columnCount={2}
      columnWidth={160}
      rowCount={2}
      rowHeight={35}
      height={70}
      width={320}
    >
      {CellMizmix}
    </FixedSizeGrid>
  );

  const CellSentence = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div
      style={style}
    >
      {rowIndex == 0 ? (
        sentence.map(it => it).join(' ')
      ) : rowIndex == 1 ? (
        <div>
          <text style={{ color: 'red' }}>{hltSentenceThirty.target}</text>
          {hltSentenceThirty.tail}
          <br />
          {hltSentenceThirty.hint.hint}
        </div>
      ) : (
        <div />
      )}
    </div>
  );

  const TableSentence = () => (
    <FixedSizeGrid
      className="GridSentence"
      columnCount={1}
      columnWidth={320}
      rowCount={3}
      rowHeight={35}
      height={110}
      width={320}
    >
      {CellSentence}
    </FixedSizeGrid>
  );

  return (
    <div>
      widgets
      <br />
      1.
      <TableChang />
      <br />
      2.
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>
            {wordsItfditt[0].hanyjiz}
            </td>
          </tr>
          <tr>
            <td>
              <TableItfdittEighth />
            </td>
          </tr>
          <tr>
            <td>
              <input
            type="text"
            value={input.inputTen}
            name="inputTen"
            onChange={handleChangeItfditt}
          />
            </td>
          </tr>
          <tr>
            <td>
              <TableItfdittThird />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={input.inputEleven}
                name="inputEleven"
                onChange={handleChangeItfditt}
              />
            </td>
          </tr>
          <tr>
            <td>
            <TableItfdittFirst />
            </td>
          </tr>
          <tr>
            <td>
                        <input
            type="text"
            value={input.inputTwelve}
            name="inputTwelve"
            onChange={handleChangeItfditt}
          />

            </td>
          </tr>
        </tbody>
      </table>
      <br />

      <br />
      3.
      <table>
        <thead>{wordsMizmix[0].hanyjiz}</thead>
        <tbody>
          <tr>
            <td colSpan={2}>
              <TableMizmix />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={input.inputTwenty}
                name="inputTwenty"
                onChange={handleChangeMizmix}
              />
            </td>
            <td>
              <input
                type="text"
                value={input.inputTwentyOne}
                name="inputTwentyOne"
                onChange={handleChangeMizmix}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      4.
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>
              <TableSentence />
            </td>
          </tr>
          <tr>
            <td>
            <input
            type="text"
            value={inputThirty}
            // name="inputThirty"
            onChange={handleChangeSentence}
          />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      5.
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>單語</td>
          </tr>
          <tr>
            <td>danzgiy. danzguy</td>
          </tr>
          <tr>
            <td>タヌ⎸ギイ⎛. タヌ⎸グウ⎛</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WidgetsPage;
