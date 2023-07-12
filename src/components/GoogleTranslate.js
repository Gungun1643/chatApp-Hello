import { useEffect, useState } from "react";
import { SelectPicker } from "rsuite";
import { getCookie, hasCookie, setCookie } from 'cookies-next';

const languages = [
    { label: 'English', value: '/auto/en' },
    { label: `Русский`, value: '/auto/ru' },
    { label: 'Polski', value: '/auto/pl' }];

// define the components state using the useState hook

const [selected, setSelected] = useState(null);

/*to load the Google Translate script -> we will use the 'useEffect' hook, 
we will pass an empty array as the first argument , so that this effect runs only once when the 
component is first rendered  */

useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;


    /*to determine the selected language */
    if (hasCookie('googtrans')) {
        setSelected(getCookie('googletrans'));
    } else {
        setSelected('/auto/en');
    }
}, []);

/*add the google translate element init => it is responsible for initializing the Google Translate feature on the page .... 
What does it do??
1.It create a new instance of the "TranslateElement" object and configures it with options for the page language, whether to automatically display the translation , the included languages and the layout. 
2. It also sets the target element for the Google Translate feature to be the elment with and id of "google_translate_element". */


const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({
        pageLanguage: 'auto',
        autoDisplay: false,
        includedLanguages: "ru,en,pl",/*if you remove it , by default all the google supported languages will be included  */
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }
        , 'google_translate_element');
}

/*step 6. Handling the language change ...
=> the componenet also include a callback function called "langChange" that is passed to the SelectPicker
 component as the "onSelect" prop .
 => It triggers when the user selects a language from the options.
 =>It takes the selected value and sets it as the vlaue of the 'googtrans' cookie,
  it also set the selected state to the selected value , and finally reloads the page  */

const langChange = (e, m, evt) => {
    evt.preventDefault();
    if (hasCookie('googtrans')) {
        setCookie('googtrans', decodeURI(e));
        setSelected(e);
    } else {
        setCookie('googtrans', e);
        setSelected(e);
    }
    window.location.reload();
}

/*step 7=> render the componenet => finally we render the google_translate_element div,
 which is where the Google Translate feature will be displayed, and the SelectPicker component
  which allows the users to select their preferred language... */

return (
    <>
        <div id="google_translate_element" style={{ width: '0px', height: '0px', position: 'absolute', left: '50%', zIndex: -99999 }}></div>
        <SelectPicker
            data={languages}
            style={{ width: 100 }}
            placement="bottomEnd"
            cleanable={false}
            value={selected}
            searchable={false}
            className={'notranslate'}
            menuClassName={'notranslate'}
            onSelect={(e, m, evt) => langChange(e, m, evt)}
            placeholder="Lang" />
    </>
);

export default googleTranslateElementInit;