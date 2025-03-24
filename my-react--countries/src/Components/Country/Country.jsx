import './Country.css'
const Country = ({country}) => {
    console.log(country)
    return (
        <div className='country'>
            <h5 >Name: {country.name.common}</h5>
            <img className='pic'  src={country?.coatOfArms?.png} alt="" />
        </div>
    );
};

export default Country;