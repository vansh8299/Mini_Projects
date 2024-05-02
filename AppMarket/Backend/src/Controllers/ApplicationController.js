const ApplicatiionService = require("../Services/ApplicationService");

exports.getAllApplications = async (req, res) => {
  try {
    const applications = await ApplicatiionService.getAllApplications();
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch applications" });
  }
};

exports.getAllApplicationById = async (req, res) => {
  try {
    const application = await ApplicatiionService.getApplicationById(
      req.params.id
    );
    if (!application) {
      res.status(404).json({ message: "Application not found " });
    }
    res.json(application);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch applications" });
  }
};

exports.deleteApplication = async (req, res) => {
  try {
    await ApplicatiionService.deleteApplication(req.params.id);
    res.json({ message: "Application deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateApplication = async (req, res) => {
  try {
    const application = await ApplicatiionService.updateApplication(
      req.params.id,
      req.body
    );
    if (!application) {
      res.status(404).json({ message: "Application not found " });
    }
    res.json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createApplication = async (req, res) => {
  try {
    const application = await ApplicatiionService.createApplication(req.body);
    if (!application) {
      res.status(404).json({ message: "Application not found " });
    }
    res.json(application);
  } catch (error) {
    res.status(500).json({ message: "Failed to create applications" });
  }
};
