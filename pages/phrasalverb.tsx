import { useState } from 'react';
import { TonalPhrasalInflector} from 'taipa';
import { TonalTransitivePhraseme } from 'taipa';

function PhrasalVerbPage() {
    const [input, setInput] = useState();

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value)
    };

    const phrasalVerbs = [
        ['koannw', 'diurh'],
        ['longw', 'diurh']
    ];

    const matches = phrasalVerbs.filter(x => x.join(' ') === input);

    const phinfl = new TonalPhrasalInflector();
    
    let fr1 = phinfl.analyzeTransitiveFourth('', ''); 
    if(matches[0]) {
        fr1 = phinfl.analyzeTransitiveFourth(matches[0][0], matches[0][1]);
    }

    const forms = fr1.getProceedingForms()

    return (

        <div>
            <label>拍羅馬字, 輸出繼續形
            <br/>
            <input  type='text' list="verbs" onChange={handleChange}/></label>
            <datalist id="verbs">
                {phrasalVerbs.map(x => <option key={x[0] + x[1]} value={x[0] + ' ' + x[1]}/> )}
            </datalist>
            {forms.map(x => (<a>{x.literal} </a>))}
        </div>
    )
}

export default PhrasalVerbPage