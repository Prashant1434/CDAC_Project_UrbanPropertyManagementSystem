function Builder() {
    var adminId = sessionStorage.getItem("UserId");
    // const getBuildingList = () => {
    //     var helper = new XMLHttpRequest();
    //     helper.onreadystatechange = () => {
    //         if (helper.readyState == 4 && helper.status == 200) {
    //             var responseReceived = JSON.parse(helper.responseText);
    //             console.log(responseReceived);
    //         }
    //     };

    //     helper.open("GET", "http://localhost:7078/admin/buildinglist/" + adminId);
    //     helper.send();
    // }
    return ( <><h1>THis is Builder</h1>
    
    <center>
                        {/* <button type="button" className="btn btn-primary" onClick={getBuildingList}>Add Owner</button> */}
                    </center>
    </> );
}

export default Builder;