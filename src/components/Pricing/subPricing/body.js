import Card from './card';

function Body() {
    return (<div>
        <div className='container' style={{paddingBottom: 120}}>
            <div className='pricing-template'>
                <Card 
                title='Free'
                subTitle='($0/class)' 
                bodyTitle='Freemium'
                bodySubTitle='2 COMPLIMENTARY LIVE CLASSES'
                extra='*'
                />
                <Card 
                title='$23.99 /month'
                subTitle='($6/class)' 
                bodyTitle='EXPLORE'
                bodySubTitle='4 LIVE CLASSES'
                month='per month'
                />
                <Card 
                title='$43.99 /month'
                subTitle='($5.50/class)' 
                bodyTitle='GROWTH'
                bodySubTitle='8 LIVE CLASSES'
                month='per month'
                />
                <Card 
                title='MASTERY'
                subTitle='(unlimited)' 
                bodyTitle='EXPLORE'
                bodySubTitle='UNLIMITED LIVE CLASSES'
                />
            </div>
        </div>
    </div>)
}

export default Body;