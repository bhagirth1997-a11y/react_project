import { Friuts } from "./Friuts";
import "./Map_And_Filter.css";


const Map = (() => {
    return (
        <>

            {
                <center><table className="heading" >
                    <thead>
                        <tr><th className="heading1">id</th>
                            <th className="heading1">name</th></tr>
                    </thead>

                    {
                        Friuts.filter((value) =>
                            value.name.includes('')
                        ).map((value, index) => {
                            return (
                                <>

                                    <tbody className="map">
                                        <tr key={index.id} align="center">
                                            <td className="heading1" >{value.id}</td>
                                            <td className="heading1" >{value.name}</td>
                                        </tr>
                                    </tbody>
                                </>
                            )
                        })

                    }



                </table></center>
            }



        </>
    )
})
export { Map };