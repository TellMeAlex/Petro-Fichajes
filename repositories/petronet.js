const axios = require('axios').default

// [X] Poden hacer login
function login (username, password) {
  const URL = 'http://notifymee.es/fichar/index.php'
  // llamada axios con form url encoded
  const params = new URLSearchParams()
  params.append('username', username)
  params.append('password', password)

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  return axios.post(URL, params, config)
}

// [X] Poden fichar

function fichar (nombre, apellido, token, email) {
  const URL = 'http://notifymee.es/fichar/fichar.php'

  const params = new URLSearchParams()
  params.append('tipo', 'Pausa')
  params.append('nombre', nombre)
  params.append('apellido', apellido)
  params.append('token', token)
  params.append('email', email)

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  return axios.post(URL, params, config)
}

// [ ] Comprobar si estamos trabajando mediante la consulta a dia actual

// [ ] Consultar el histórico de fichajes desde el año 2010 hasta el dia actual

// [ ] Insertar el proyecto con 100% de horas en HA

// [ ] consultar los Dias de vacaciones restantes

module.exports.login = login
module.exports.fichar = fichar
