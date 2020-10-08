const IssPosition = (data) => {
    this.data = data;

    //データ判別
    this.dataCheck = () => {
        dataCheck(this.data);
    }
}



module.exports = IssPosition;