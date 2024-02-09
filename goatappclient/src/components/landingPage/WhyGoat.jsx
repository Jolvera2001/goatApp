import '../../styles/WhyGoat.css'

function WhyGoat() {
    const feature1 = () => {
        console.log("pressed feature 1")
    }

    const feature2 = () => {
        console.log("pressed feature 2")
    }

    const feature3 = () => {
        console.log("pressed feature 3")
    }

    return (
        <div className="featureMain">
            <div className="whyGoat">
                <h2>Why GOat Places?</h2>
                <p className='pWhy'>GOat Places is made by students, for students in order to address the issues of on-campus event coordination. 
                    No more juggling with apps, keep things in one place for all your campus communication!</p>
            </div>
            <div className="featureStack">
                <div className="featureCard front"></div>
                <div className="featureCard back"></div>
                <div className='radioButtons'>
                    <input type='radio' value={feature1}></input>
                    <input type='radio' value={feature2}></input>
                    <input type='radio' value={feature3}></input>
                </div>
            </div>
        </div>
    );
}

export default WhyGoat