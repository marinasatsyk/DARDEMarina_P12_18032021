import ChartPerformance from './chart_performance';

function PerformanceUser({ data }) {
    return (
        <>
            <ChartPerformance data={data} />
            {console.log('=========Performance')}
            {console.log(data)}
        </>
    );
}

export default PerformanceUser;
