import Article from "../models/articleModel.js";

/**************************************
 **********  Get accessory list  ***********
 **************************************/
const getArticles = async (req, res) => {
  try {
    const data = await Article.find();
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};
/**********    get one accessory     ***********
 **************************************/

const getArticle = async (req, res) => {
  try {
    const id = req.params.id;
    const article = await Article.findById(id);
    res.json(article);
  } catch (error) {
    console.log(error);
  }
};

/**************************************
 **********    Add accessory     ***********
 **************************************/
const addArticle = async (req, res) => {
  try {
    const data = {
      name: req.body.title,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      availability: req.body.availability,
      image: req.file.filename,
  


      // image: req.file.filename
    };
    const newArticle = await Article.create(data);
    console.log(newArticle);
    res.json(newArticle);
  } catch (error) {
    console.log(error.message);
    res.json(error);
  }
};

/**************************************
 **********    update accessory     ***********
 **************************************/

const updateArticle = async (req, res) => {
  try {
    const id = req.params.id;
    const articleupdated = req.body;
    const item = await Article.findByIdAndUpdate(id, articleupdated, {
      new: true,
    });
    res.json(item);
  } catch (error) {
    console.log(error);
  }
};

/**************************************
 **********    delete accessory     ***********
 **************************************/

const deleteArticle = async (req, res) => {
  try {
    const id = req.params.id;
    await Article.findByIdAndDelete(id);
    res.json("deleted");
  } catch (error) {
    console.log(error);
  }
};

export { getArticles, getArticle, addArticle, updateArticle, deleteArticle };


