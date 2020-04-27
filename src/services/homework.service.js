import 'react';
import { findIndex } from 'lodash';



const BACKEND_SERVER = 'https://promise-server.herokuapp.com';
// const BACKEND_SERVER = 'http://localhost:5000';
export class HomeworkService {

  fetchList = async () => {
    const data = await fetch(`${BACKEND_SERVER}/api/homeworks`);
    const hwList = data.json();
    return hwList;
  }

  deleteOne = async (id) => {
    await fetch(`${BACKEND_SERVER}/api/homeworks/${id}`, {
      method: 'DELETE'
    });
    return await this.fetchList();
  }

  updateOne = async (lesson) => {
    const req = await fetch(`${BACKEND_SERVER}/api/homeworks/${lesson.id}`, {
      method: 'PUT',
      body: JSON.stringify(lesson)
    });
    const result = await req.json();
    const homeworks = await this.fetchList();
    const index = findIndex(homeworks, { id: result.id });

    if (index > -1) {
      const newHomeworks = [...homeworks];
      newHomeworks[index] = result;
      return newHomeworks;
    }
  }
}