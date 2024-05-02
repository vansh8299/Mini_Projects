const Application = require("../Model/Application");

exports.getAllApplications = async () => {
  try {
    return await Application.find().populate("comments");
  } catch (error) {
    throw new Error("Failed to fetch the application");
  }
};

exports.getApplicationById = async (id) => {
  try {
    const application = await Application.findById(id);

    if (!application) {
      throw new Error("Application not found");
    }

    return application;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.createApplication = async (newFields) => {
  const newApplication = new Application(newFields);
  return await newApplication.save();
};

exports.updateApplication = async (id, updatedFields) => {
  return await Application.findByIdAndUpdate(id, updatedFields, { new: true });
};

exports.deleteApplication = async (id) => {
  return await Application.findByIdAndDelete(id);
};
