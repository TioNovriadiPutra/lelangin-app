import useController from "@hooks/useController";
import { getCategories } from "@services/categoryService";
import { getCommunities } from "@services/communityService";
import { addAuctionForm } from "@utils/constant/form";

const useCategoryController = () => {
  const { authToken, onHandleMutate, onHandleError, onHandleSettled } =
    useController();

  const getCategoriesService = async () => {
    onHandleMutate();

    await getCategories(authToken)
      .then(async (responseCategory) => {
        await getCommunities(authToken)
          .then((responseCommunity) => {
            Object.assign(addAuctionForm, {
              inputs: addAuctionForm.inputs.map((item) => {
                if (item.name === "categoryId") {
                  Object.assign(item, {
                    items: responseCategory.data.map((tmp) => {
                      return {
                        label: tmp.category_name,
                        value: tmp.id,
                      };
                    }),
                  });
                } else if (item.name === "communityId") {
                  Object.assign(item, {
                    items: responseCommunity.data.map((tmp) => {
                      return {
                        label: tmp.community_name,
                        value: tmp.id,
                      };
                    }),
                  });
                }

                return item;
              }),
            });
          })
          .catch((error) => {
            onHandleError(error);
          });
      })
      .catch((error) => {
        onHandleError(error);
      })
      .finally(() => {
        onHandleSettled();
      });
  };

  return {
    getCategoriesService,
  };
};

export default useCategoryController;
