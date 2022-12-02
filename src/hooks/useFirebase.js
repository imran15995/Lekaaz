import { useEffect, useState } from "react"
import initFirebase from "../Firebase/firebase.init"
import {
    applyActionCode,
    confirmPasswordReset,
    createUserWithEmailAndPassword,
    deleteUser,
    EmailAuthProvider,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    reauthenticateWithCredential,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateEmail,
    updatePassword,
    updateProfile
} from "firebase/auth";



initFirebase()

const useFirebase = () => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    /*  Sing in with google */
    const SignInWithGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, provider)
            .then(result => {
                /* const user = result.user
                setUser(user) */
            })
            .catch(error => {
                console.log(error)
            }).finally(() => setIsLoading(false))
    }


    /* SignUp via Email */

    const signUpWithEmail = (email, password, name, setAuthError, setUserModal, setVerify, setRecentSignUpUserEmail) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                sendEmailVerification(auth.currentUser)
                if (result.user) {
                    setRecentSignUpUserEmail(result?.user?.email)
                    setUserModal(false)
                    setVerify(true)
                    updateProfile(auth.currentUser, {
                        displayName: name
                    })
                        .then(() => {
                            /* Name added */
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                }
            })
            .catch(error => {
                setAuthError({
                    status: true,
                    text: error.code === "auth/email-already-in-use" ? "User Is Already Registered" : error.code
                })
            }).finally(() => setIsLoading(false))
    }

    /* Verify Email */
    const verifyingEmail = (mode, actionCode, setEmailVerified, setCustomLoad) => {
        setIsLoading(true)
        setCustomLoad(true)
        applyActionCode(auth, actionCode)
            .then((resp) => {
                setEmailVerified(true)
            }).catch((error) => {
                // Code is invalid or expired. Ask the user to verify their email address
                // again.
            })
            .finally(() => {
                setIsLoading(false)
                setCustomLoad(false)
            })


    }



    /* Login via Email*/
    const loginWithEmail = (email, password, setAuthError) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                /* User loggedin */
            })
            .catch(error => {
                setAuthError({
                    status: true,
                    text: error.code === "auth/wrong-password" || "auth/user-not-found" ? "Invalid username or password, please try again." : error.code
                })
            })
            .finally(() => setIsLoading(false))
    }

    /* Sign out user */
    const logOutUser = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser(null)
            }).catch(error => {
                console.log(error)
            }).finally(() => setIsLoading(false))
    }

    //Change display name
    const changeUserName = (updatedName, navigate, redirectURL, setChangeLoading) => {
        setChangeLoading(true)
        updateProfile(auth.currentUser, {
            displayName: updatedName,
        }).then(() => {
            navigate(redirectURL)
        }).catch((error) => {
            // An error occurred
            // ...
        }).finally(() => setChangeLoading(false))

    }


    //Sending Reset verification email
    const resetUserPassword = (email, setForgetPass, setVerify, setRecentSignUpUserEmail) => {
        setIsLoading(true)
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setRecentSignUpUserEmail(email)
                setForgetPass(false)
                setVerify(true)
            })
            .catch(() => {
                window.alert("Invalid email - Please try again.")

            }).finally(() => setIsLoading(false))
    }


    // reseting the password
    const resetPassword = (actionCode, newPassword, setCustomLoad, navigate) => {
        setCustomLoad(true)
        confirmPasswordReset(auth, actionCode, newPassword).then((resp) => {
            window.alert('Password reset succesfull. Please login by your new password.')
            navigate('/')
        }).catch((error) => {
            window.alert(error.code)
        }).finally(() => setCustomLoad(false))
    }

    //Delete a user
    const HandleDeleteUser = (provider, password, setCustomLoad) => {
        setCustomLoad(true)
        const user = auth.currentUser

        const credential = EmailAuthProvider.credential(
            user.email,
            password
        );

        if (provider === "password") {
            reauthenticateWithCredential(user, credential).then(() => {
                deleteUser(auth.currentUser).then(() => {
                    logOutUser()
                }).catch((error) => {
                    console.log(error)
                });
            }).catch((error) => {
                if (error.code === "auth/wrong-password") {
                    window.alert("Invalid Password , Please try again.")
                }
                else if (error.code === "auth/too-many-requests") {
                    window.alert("Too many requests, Please try again later")
                }
                else {
                    console.log(error.code)
                }
            }).finally(() => setCustomLoad(false))
        } else {
            deleteUser(auth.currentUser).then(() => {
                logOutUser()
            }).catch((error) => {
                if (error.code === "auth/requires-recent-login") {
                    window.alert("Please Re-Login your account and try again immediately.")
                } else {
                    console.log(error.code)
                }
            }).finally(() => setCustomLoad(false))
        }

    }


    //Change user password
    const updateUserPassword = (old_password, new_password, setWorkingToChangePassword) => {

        setWorkingToChangePassword(true)

        const credential = EmailAuthProvider.credential(
            user.email,
            old_password
        );
        reauthenticateWithCredential(user, credential).then(() => {

            updatePassword(user, new_password).then(() => {
                window.alert("Password changed succesfully. Please login with your new password")
                logOutUser()
            }).catch((error) => {
                window.alert(error.code)
            });

        }).catch((error) => {
            if (error.code === "auth/wrong-password") {
                window.alert("Invalid Password , Please try again.")
            }
            else if (error.code === "auth/too-many-requests") {
                window.alert("Too many requests, Please try again later")
            }
            else {
                console.log(error.code)
            }
        }).finally(() => setWorkingToChangePassword(false))
    }


    //update Email
    const updateUserEmail = (password, newEmail, setIsWorking) => {
        setIsWorking(true)
        const credential = EmailAuthProvider.credential(
            user.email,
            password,
        );

        reauthenticateWithCredential(user, credential).then(() => {
            updateEmail(auth.currentUser, newEmail)
                .then((a) => {
                    console.log(a)
                }).catch((error) => {
                    window.alert(error.code)
                    console.log(error)
                });

        }).catch((error) => {
            if (error.code === "auth/wrong-password") {
                window.alert("Invalid Password , Please try again.")
            }
            else if (error.code === "auth/too-many-requests") {
                window.alert("Too many requests, Please try again later")
            }
            else {
                console.log(error)
            }
        }).finally(() => setIsWorking(false))
    }


    /*   Load logged in user */
    useEffect(() => {
        setIsLoading(true)
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user?.emailVerified) {
                setUser(user)
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [auth])

    return {
        user,
        SignInWithGoogle,
        logOutUser,
        signUpWithEmail,
        loginWithEmail,
        isLoading,
        verifyingEmail,
        changeUserName,
        HandleDeleteUser,
        updateUserPassword,
        resetUserPassword,
        resetPassword,
        updateUserEmail
    }
}

export default useFirebase;