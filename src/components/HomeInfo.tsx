import { Link } from "react-router-dom";

export interface CurrentStage {
    currentStage: number;
}
//@ts-ignore
import { arrow } from "../assets/icons";

const HomeInfo = (currentStage: CurrentStage) => {
    
    switch (currentStage.currentStage) {
        case 1:
            return (
                <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                    Hi, I'm
                    <span className='font-semibold mx-2 text-white'>Andrej</span>
                    👋
                    <br />
                    A Software Engineer from Croatia 🇭🇷
                </h1>
            );

        case 2:
            return (
                <div className='info-box'>
                    <p className='font-medium sm:text-xl text-center'>
                        Worked for one company <br /> and picked up many skills along the way
                    </p>

                    <Link to='/about' className='neo-brutalism-white neo-btn'>
                        Learn more
                        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                    </Link>
                </div>
            );
        case 3:
            return (
                <div className='info-box'>
                    <p className='font-medium text-center sm:text-xl'>
                        Led a projects to success over the years. <br /> Curious about the impact?
                    </p>

                    <Link to='/projects' className='neo-brutalism-white neo-btn'>
                        Visit my portfolio
                        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                    </Link>
                </div>
            );
        case 4:
            return (
                <div className='info-box'>
                    <p className='font-medium sm:text-xl text-center'>
                        Need a project done or looking for a dev? <br /> I'm just a few keystrokes away
                    </p>

                    <Link to='/contact' className='neo-brutalism-white neo-btn'>
                        Let's talk
                        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                    </Link>
                </div>
            );

    }

    return null;
};

export default HomeInfo;