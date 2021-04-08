const messages = {
    'en': 'Hello World',
    'it': 'Ciao Mondo'
}

function MyButton(props) {

    let text ;
    if (props.lang===undefined)  {
        text = "Hi";
    } else {
        text = messages[props.lang] ;
    }
    return (
        <button>
            {text || "Hi!"}
        </button>
    );

}

export default MyButton ;