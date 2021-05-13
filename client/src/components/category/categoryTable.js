import React from 'react';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class categoryTable extends React.Component {
  state = {
    payloadArrived: false,
    delete: "",
    modalInsertar: false,
    modalEliminar: false,
    form: {
      id: '',
      user: '',
      nameCategory: '',
      oldName: '',
    },
    categoryList: [],
  }

  getCategoryList = () => {
    axios.get('/api/category/getAll').then((response) => {
      this.setState({
        categoryList: response.data.categoryList,
      });
    }).catch(error => {
      console.log(error.message);
    })

  }

  componentDidMount() {
    this.getCategoryList();
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  modalInsert = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  }

  insertCategory = () => {
    axios.post('/api/category/insert',
      {
        _id: "",
        nameCategory: this.state.form.nameCategory,
        user: this.state.form.user
      }
    ).then(
      this.modalInsert(),
      this.getCategoryList(),
    )
      .catch(console.log);
  }

  deleteCategory = () => {
    axios.delete('/api/category/delete', { data: { nameCategory: this.state.form.nameCategory } })
      .then(
        this.setState({
          modalEliminar: false
        }),
        this.getCategoryList(),
      );
  }

  modifyCategory = () => {
    axios.put('/api/category/update', {
      id: this.state.form.id,
      nameCategory: this.state.form.nameCategory,
      oldName: this.state.form.oldName,
    }
    ).then(
      this.modalInsert(),
      this.getCategoryList(),
    ).catch();
  }

  selectCategory = (category) => {
    let cat = category;
    this.setState({
      modalType: 'update',
      form: {
        id: cat._id,
        nameCategory: cat.nameCategory,
        user: cat.user,
        oldName: cat.nameCategory,
      },
    });
  }

  render() {
    let list;
    list =
      <tbody>
        {this.state.categoryList.map((category) => {
          return (
            <tr key={category._id}>
              <th>{category.nameCategory}</th>
              <th>
                <button
                  className="btn btn-primary"
                  onClick={() => { this.selectCategory(category); this.modalInsert() }}
                >
                  Modificar
                </button>
              </th>
              <th>
                <button
                  className="btn btn-danger"
                  onClick={() => { this.selectCategory(category); this.setState({ modalEliminar: true }) }}
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
            <h1>Categorias</h1>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-12 d-flex justify-content-center">
              <button
                className="btn btn-success"
                onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsert() }}>
                Agregar Categoría
              </button>

            </div>
          </div>
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th>Nombre Categoría</th>
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
                <h3>Insertar Categoria</h3>
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
              <label htmlFor="nombre">Usuraio</label>
              <input className="form-control" type="text" name="user" id="nombre" readOnly onChange={this.handleChange} value={this.props.user} />
              <br />
              <label htmlFor="txtname">Nombre de la Categoría</label>
              <input className="form-control"
                type="text"
                name="nameCategory"
                id="txtnameCategory"
                onChange={this.handleChange}
                value={this.state.form ? this.state.form.nameCategory : ""} />
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
    )
  }
}

export default categoryTable;