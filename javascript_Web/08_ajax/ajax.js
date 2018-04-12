function app() {

    document.querySelector('#btnAjax').addEventListener('click', getDatos)
    document.querySelector('#btnAjaxItem').addEventListener('click', getDatos)
    document.querySelector('#btnAjaxBorrar').addEventListener('click', deleteDatos)

    function deleteDatos(ev) {
        let item = document.querySelector('#btnAjax')
        let metodo = 'DELETE'
        let url = ''
        if (ev.target.id == 'btnAjax') {
            url = 'http://localhost:3000/posts'
        } else {
            let item = document.querySelector('#itemB').value
            if (item) {
                url = 'http://localhost:3000/posts' + item
            } else {
                return
            }
        }



        function stateChange(ev) {
            console.log("Cambio de estado")
            console.log(ajax.readyState)
            if (ajax.readyState === 4) {

                console.log("comun ok")
                if (ajax.status === 200) {
                    let response = JSON.parse(ajax.responseText)
                    console.log(response)

                } else {
                    console.log(ajax.status)
                    console.log(ajax.statusText)
                }
            }
        }


        ajax.open(metodo, url)
        ajax.send(null)
    }
    function getDatos(ev) {

        let metodo = 'GET'
        let url = ''
        if (ev.target.id == 'btnAjax') {
            url = 'http://localhost:3000/posts'
        } else {
            let item = document.querySelector('#item').value
            if (item) {
                url = 'http://localhost:3000/posts' + item
            } else {
                return
            }
            conectar(metodo, url)
        }


        function conectar(metodo, url) {
            let ajax = new XMLHttpRequest()
            ajax.onreadystatechange = stateChange
            ajax.open(metodo, url)
            ajax.send(null)

            function stateChange() {
                console.log("Cambio de estado")
                console.log(ajax.readyState)
                if (ajax.readyState === 4) {

                    console.log("comun ok")
                    if (ajax.status === 200) {
                        let response = JSON.parse(ajax.responseText)
                        console.log(response)
                    } else {
                        console.log(ajax.status)
                        console.log(ajax.statusText)
                    }
                }
            }
        }
    }
}

window.addEventListener('load', app, false)