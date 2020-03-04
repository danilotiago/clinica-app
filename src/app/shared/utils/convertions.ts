export const convertIdToSendToAPI = (data: object): any => {
    (<any>data)._id = (<any>data).id;
    (<any>data).id = undefined;
    return data;
}