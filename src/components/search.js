
import { useGetProductByIdQuery } from '../app/service/API';

const search = () => {

    const { data, isError, isLoading } = useGetProductByIdQuery();
    console.log(data);

    if (isError) {
        return <h1> we get an Error</h1>
    }

    if (isLoading) {
        return <h1>Loading....</h1>
    }

    // getting data
    return (
        <div>
            <h1>{data?.brand}</h1>
            <h1>{data?.category}</h1>
            <h1>{data?.description}</h1>

        </div>
    );
}

export default search;
