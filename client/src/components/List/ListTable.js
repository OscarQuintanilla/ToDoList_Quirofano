import React from 'react';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

class ListTable extends React.Component {
  state = {
    modalInsertar: false,
    modalEliminar: false,
    form: {
      id: '',
      nameList: '',
      category: '',
      user: '',
      items: [],
      oldName: '',
      lengthitems: '',
    },
    metaList: [],
    dropdownOpen: false,
    setDropdownOpen: false
  }

  modalInsert = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  getMetaList = () => {
    axios.get('/list/getAll').then((response) => {
      this.setState({
        metaList: response.data.metaList
      });
      this.state.metaList.map(currentList => {
        currentList.lengthitems = Object.keys(currentList.items).length;
        console.log(currentList.lengthitems);
        return 0;
      });

    }).catch((error) => {
      console.log(error.message);
    });

  }

  insertList = () => {
    axios.post('/list/insert', {
      nameList: this.state.form.nameList,
      category: this.state.form.category,
      user: this.state.form.user,
      items: this.state.form.items,
    }).then(
      this.modalInsert(),
      this.getMetaList()
    )
  }

  updateList = () => {
    axios.put('/list/update', {
      nameList: this.state.form.nameList,
      category: this.state.form.category,
      user: this.state.form.user,
      items: this.state.form.items,
      oldName: this.state.form.nameList,
    }).then(
      this.modalInsert(),
      this.getMetaList()
    ).catch(console.log)
  }

  deleteList = () => {
    axios.delete('/list/delete',
      { data: { nameList: this.state.form.nameList } })
      .then(
        this.setState({
          modalEliminar: false
        }),
        this.getMetaList(),
      ).catch(console.log);
  }

  selectList = (List) => {
    let lis = List;
    this.setState({
      modalType: 'update',
      form: {
        nameList: lis.nameList,
        category: lis.category,
        user: lis.user,
        items: lis.items,
      }
    })
  }

  componentDidMount() {
    this.getMetaList();
  }

  render() {

    let list;
    list =
      <tbody>
        {this.state.metaList.map((metaList) => {
          return (
            <tr key={metaList._id}>
              <th>{metaList.nameList}</th>
              <th>{metaList.category}</th>
              <th>{Object.keys(metaList.items).length}</th>
              <th>
                <button
                  className="btn btn-primary"
                  onClick={() => { this.selectCategory(metaList); this.modalInsert() }}
                >
                  Modificar
                </button>
              </th>
              <th>
                <button
                  className="btn btn-danger"
                  onClick={() => { this.selectCategory(metaList); this.setState({ modalEliminar: true }) }}
                >
                  Eliminar
                </button>
              </th>
            </tr>)
        })}
      </tbody>;

    return (
      <section>
        <div className="container">
          <div className="row">
            <h1>Listas</h1>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-12 d-flex justify-content-center">
              <button
                className="btn btn-success"
                onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsert() }}>
                Agregar Listas
              </button>

            </div>
          </div>
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th>Nombre de la Lista</th>
                  <th>Categoría</th>
                  <th>Tareas Registradas</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              {list}
            </table>
          </div>
        </div>
        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader style={{ display: 'block' }}>
            <div className="row">
              <div className="col-10">
                <h3>Crear Lista</h3>
              </div>
              <div className="col-2">
                <span style={{ float: 'right' }} onClick={() => this.modalInsert()}>X</span>
              </div>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label htmlFor="txtid">Id</label>
              <input
                className="form-control"
                type="text"
                name="_txtid"
                id="txtname"
                readOnly onChange={this.handleChange}
                value={this.state.form ? this.state.form.id : ""} />
              <br />
              <label htmlFor="nombre">Usuario</label>
              <input
                className="form-control"
                type="text"
                name="user"
                id="nombre"
                readOnly
                onChange={this.handleChange} value={this.props.user} />
              <br />
              <label htmlFor="txtname">Nombre de la Lista</label>
              <input className="form-control"
                type="text"
                name="nameCategory"
                id="txtnameCategory"
                onChange={this.handleChange}
                value={this.state.form ? this.state.form.nameList : ""} />
              <label htmlFor="txtname">Selecciona una categoria</label>
              <input className="form-control"
                type="text"
                name="nameCategory"
                id="txtnameCategory"
                onChange={this.handleChange}
                value={this.state.form ? this.state.form.nameList : ""} />
            </div>
          </ModalBody>
          <ModalFooter>
            {this.state.tipoModal === 'insertar' ?
              <button className="btn btn-success" onClick={() => this.insertCategory()}>
                Insertar
              </button> : <button className="btn btn-primary" onClick={() => this.modifyCategory()}>
                Actualizar
              </button>
            }
            <button className="btn btn-danger" onClick={() => this.modalInsert()}>Cancelar</button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.modalEliminar}>
          <ModalBody>
            Estás seguro que deseas eliminar la categoria {this.state.form && this.state.form.nameCategory}

          </ModalBody>
          <ModalFooter>
            <button className="btn btn-danger" onClick={() => this.deleteCategory()}>Sí</button>
            <button className="btn btn-secundary" onClick={() => this.setState({ modalEliminar: false })}>No</button>
          </ModalFooter>
        </Modal>

      </section>
    );
  }
}

export default ListTable;