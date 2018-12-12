fetch('https://ghibliapi.herokuapp.com/locations', {
    method: 'get'
})
    .then(function (response) {
        return response.json()//for experiance
            .then(
                function (data) {
                    let k = '<tbody';
                     for(i = 0;i < data.length; i++){
                        k += '<tr>';
                        k += '<td>' + data[i].id + '</td>';
                        k += '<td>' + data[i].name + '</td>';
                        k += '<td>' + data[i].climate + '</td>';
                        k += '<td>' + data[i].terrain + '</td>';
                        k += '<td>' + data[i].surface_water + '</td>';
                        k += '</tr>';
                     }
                    k+='</tbody>';
                    document.getElementById('tbody').innerHTML = k;
                }
            )
    }).catch(function (err) {
    // Error :(
    console.log('oops!');
});
