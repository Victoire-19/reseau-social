const router = require('express').Router();
const authcontroller = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const uploadController = require('../controllers/upload.controller');
const multer = require('multer');
const upload = multer();

//auth
router.post("/register", authcontroller.signUp);
router.post("/login", authcontroller.signIn);
router.get("/logout", authcontroller.logout);

//user DB
router.get('/',userController.getAllUsers);
router.get('/:id',userController.UserInfo);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.patch('/follow/:id', userController.follow);
router.patch('/unfollow/:id', userController.unfollow);

//upload
router.post('/upload',upload.single('file'), uploadController.uploadProfil);

module.exports=router;
